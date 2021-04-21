console.log('error start')

setTimeout(() => {
  throw new Error('error process here')
}, 1000);