import EventEmitter from 'events'

const eventEmitter = new EventEmitter()

function handle() {
  console.log('handled')
  console.log(this) //* since defined as a function this will return the eventEmitter
}

eventEmitter.on('event', handle)

eventEmitter.once('event', handle)

eventEmitter.emit('event') //! always goes to the begging of the stack

eventEmitter.removeListener('event', handle)

eventEmitter.emit('event') //! will not print anything

function handleAtTheEnd() {
  setTimeout(() => {
    console.log('handleAtTheEnd')
    //! will run at the end of the stack
  })
}
eventEmitter.on('eventEnd', handleAtTheEnd)
eventEmitter.emit('eventEnd')

eventEmitter.on('event2', () => {
  console.log('event2')
  console.log(this) //* if its not a function this will return an empty object
})

eventEmitter.emit('event2')

function handleData(data) {
  console.log('handled', data)
}

eventEmitter.on('event3', handleData)

eventEmitter.emit('event3', { user: 'alpap' })
