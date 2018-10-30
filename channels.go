// _Channels_ are the pipes that connect concurrent
// goroutines. You can send values into channels from one
// goroutine and receive those values into another
// goroutine.

package main

import (
	"fmt"
	"sync"
)

var wg = sync.WaitGroup{}

func main() {

	// Create a new channel with `make(chan val-type)`.
	// Channels are typed by the values they convey.
	messages := make(chan string)
	messages2 := make(chan string)
	messages3 := make(chan string)
	messages4 := make(chan string)
	// _Send_ a value into a channel using the `channel <-`
	// syntax. Here we send `"ping"`  to the `messages`
	// channel we made above, from a new goroutine.
	go func() { messages <- "ping" }()
	go func() { messages2 <- "pong" }()
	go func() { messages3 <- "sing" }()
	go func() { messages4 <- "song" }()

	// The `<-channel` syntax _receives_ a value from the
	// channel. Here we'll receive the `"ping"` message
	// we sent above and print it out.
	msg := <-messages
	msg2 := <-messages2
	msg3 := <-messages3
	msg4 := <-messages4
	fmt.Println("====")
	fmt.Println(msg)
	fmt.Println(msg2)
	fmt.Println(msg3)
	fmt.Println(msg4)
	fmt.Println("====")

	go Process(11, 1100)
	wg.Wait()
}

func Process(processOnChannels int, data int) {
	var channelArray []chan string

	for i := 0; i < processOnChannels; i++ {
		channelArray = append(channelArray, make(chan string))
	}

	wg.Done()
}
