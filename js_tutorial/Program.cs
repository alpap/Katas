using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Web;
using Npgsql;
using NpgsqlTypes;
using Serilog;
using Serilog.Events;
using Serilog.Filters;
using Serilog.Sinks.PostgreSQL;

namespace console
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            string connectionstring = "User ID=postgres;Password=;Host=localhost;Port=5432;Database=logs";
            
            string apiLog = "apiLog";
            string functionLog = "functionLog";
            string generalLog = "generalLog";
            
            IDictionary<string, ColumnWriterBase> columnWriters = new Dictionary<string, ColumnWriterBase>
            {
                {"level", new LevelColumnWriter(true, NpgsqlDbType.Varchar) },
                {"message", new RenderedMessageColumnWriter(NpgsqlDbType.Text) },
                {"exception", new ExceptionColumnWriter(NpgsqlDbType.Text) },
                {"raise_date", new TimestampColumnWriter(NpgsqlDbType.Timestamp) },
                {"machine_name", new SinglePropertyColumnWriter("MachineName", PropertyWriteMethod.ToString, NpgsqlDbType.Text, "l") }
            };
            
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .WriteTo.Console()
                .WriteTo.Logger(l => l
                    .Filter.ByIncludingOnly(p => p.Level.Equals(LogEventLevel.Information))
                    .WriteTo.PostgreSQL(connectionstring, apiLog, columnWriters)
                    .WriteTo.RollingFile("logs\\apiLog-{Date}.txt")
                )
                .WriteTo.Logger(l => l
                    .Filter.ByIncludingOnly(p => p.Level.Equals(LogEventLevel.Debug))
                    .WriteTo.PostgreSQL(connectionstring, functionLog, columnWriters)
                    .WriteTo.RollingFile("logs\\functionLog-{Date}.txt")
                )
                .WriteTo.Logger(l => l
                    .Filter.ByIncludingOnly(p => !p.Level.Equals(LogEventLevel.Information) && !p.Level.Equals(LogEventLevel.Debug))
                    .WriteTo.PostgreSQL(connectionstring, generalLog, columnWriters)
                    .WriteTo.RollingFile("logs\\generalLog-{Date}.txt")
                )
                .CreateLogger();
            
            System.Diagnostics.StackTrace t = new System.Diagnostics.StackTrace();
            Log.Information(stackTrace(t));
            
            int ss = 0;
            while (ss!=20)
            {
                Log.Information("Hello, world!");

                int a = 10, b = 0;
                try
                {
                    Log.Information(stackTrace(t));
                    Log.Debug(new System.Diagnostics.StackTrace().ToString());
                    Console.WriteLine(a / b);
                }
                catch (Exception ex)
                {
                    Log.Error(ex, "Something went wrong");
                }
                ss++;
            }
            
            Log.CloseAndFlush();
        }

        public static string stackTrace(StackTrace st)
        {
            return st.ToString().Split(' ')[3];
        }
    }
}