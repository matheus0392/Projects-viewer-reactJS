import obj from './obj'

let msg = JSON.parse(JSON.stringify(obj))
msg.pt="Portuguese"
msg.fr="French"
msg.en="English"
msg.metodos='Methods'

export default msg