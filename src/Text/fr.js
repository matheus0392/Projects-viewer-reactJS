import obj from './obj'

let msg = JSON.parse(JSON.stringify(obj))
msg.pt = "Portugais"
msg.fr = "Fraçais"
msg.en = "Anglais"
msg.inicio = 'Départ'
msg.metodos = 'Méthodes'


msg.spring_batch.annotation.EnableBatchProcessing = '@EnableBatchProcessing: injecter beans JobRepository, JobLauncher, JobRegistry, PlatformTransactionManager, JobBuilderFactory et StepBuilderFactory.'
msg.spring_batch.cdi.dataSource = '@Autowired public DataSource dataSource: objet avec renseignement de connexion de base de donné configuré en application.properties.'
msg.spring_batch.cdi.JobBuilderFactory = '@Autowired public JobBuilderFactory jobBuilderFactory: objet qui crée jobs.'
msg.spring_batch.cdi.StepBuilderFactory = '@Autowired public StepBuilderFactory stepBuilderFactory: objet qui crée steps.'
msg.spring_batch.cdi.JobLauncher = '@Autowired public JobLauncher jobLauncher: interface pour exécuter jobs.'



export default msg