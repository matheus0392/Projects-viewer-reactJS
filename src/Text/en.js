import obj from './obj'
import _ from 'lodash';

let msg = _.cloneDeep(obj)
msg.pt="Portuguese"
msg.fr="French"
msg.en="English"
msg.inicio = 'Home'
msg.metodos='Methods'

msg.aba='Tab'

export default msg