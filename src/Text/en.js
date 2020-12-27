import obj from './obj'

let msg = JSON.parse(JSON.stringify(obj))
msg.pt="Portuguese"
msg.fr="French"
msg.en="English"
msg.inicio = 'Home'
msg.metodos='Methods'

export default msg