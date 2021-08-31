import obj from './obj'
import _ from 'lodash';

let msg = _.cloneDeep(obj)
msg.pt = "Portugais"
msg.fr = "Fraçais"
msg.en = "Anglais"
msg.inicio = 'Départ'
msg.metodos = 'Méthodes'


msg.aba='Onglet'

msg.spring_batch_annotation_EnableBatchProcessing = '@EnableBatchProcessing: injecter beans JobRepository, JobLauncher, JobRegistry, PlatformTransactionManager, JobBuilderFactory et StepBuilderFactory.'
msg.spring_batch_cdi_dataSource = '@Autowired public DataSource dataSource: objet avec renseignement de connexion de base de donné configuré en application.properties.'
msg.spring_batch_cdi_JobBuilderFactory = '@Autowired public JobBuilderFactory jobBuilderFactory: objet qui crée jobs.'
msg.spring_batch_cdi_StepBuilderFactory = '@Autowired public StepBuilderFactory stepBuilderFactory: objet qui crée steps.'
msg.spring_batch_cdi_JobLauncher = '@Autowired public JobLauncher jobLauncher: interface pour exécuter jobs.'


msg.spring_batch_beans_JobExecutionListenerSupport = '@Bean public JobExecutionListenerSupport JobListener(): cria um novo objeto de uma classe que extende JobExecutionListenerSupport.'
msg.spring_batch_beans_StepExecutionListener = '@Bean public StepExecutionListener StepListener(): cria um novo objeto de uma classe que implementa  StepExecutionListener.'
msg.spring_batch_beans_InfoItemProcessor = '@Bean public InfoItemProcessor infoItemProcessor(): cria um novo objeto de uma classe que implementa ItemProcessor<Info, Info>'
msg.spring_batch_beans_FlatFileItemReader = '@Bean public FlatFileItemReader < Info > infoItemReader(): cria um novo objeto que lê um arquivo de texto e tranforma em objetos.'
msg.spring_batch_beans_JdbcBatchItemWriter = '@Bean public JdbcBatchItemWriter<Info> infoItemWriter(): cria um novo objeto com informaçõe para salvar informações no banco.'
msg.spring_batch_beans_infoItemStep = '@Bean public Step infoItemStep(): cria e disponibiliza um step específico.'
msg.spring_batch_beans_infoJob = '@Bean public Job infoJob(): cria e disponibiliza um job específico.'

msg.spring_batch_utiliza_JobBuilderFactory = 'utilise: JobListener(), infoItemStep().'
msg.spring_batch_utilizado_JobBuilderFactory = 'utilisé par: infoJob().'
msg.spring_batch_utiliza_StepBuilderFactory = 'utilise: infoItemReader(), infoItemWriter(), infoItemProcessor(), StepListener().'
msg.spring_batch_utilizado_StepBuilderFactory = 'utilisé par: infoItemStep().'
msg.spring_batch_utiliza_JobLauncher = 'utilise: infoItemStep().'
msg.spring_batch_utilizado_JobLauncher = 'utilisé par: Exec().'
msg.spring_batch_utilizado_JobExecutionListenerSupport = 'utilisé par: JobBuilderFactory.'
msg.spring_batch_utilizado_StepExecutionListener = 'utilisé par: StepBuilderFactory.'
msg.spring_batch_utilizado_InfoItemProcessor = 'utilisé par: StepBuilderFactory.'
msg.spring_batch_utilizado_FlatFileItemReader = 'utilisé par: StepBuilderFactory.'
msg.spring_batch_utilizado_JdbcBatchItemWriter = 'utilisé par: StepBuilderFactory.'
msg.spring_batch_utilizado_infoItemStep = 'utilisé par: infoJob().'
msg.spring_batch_utilizado_infoJob = 'utilisé par: Exec().'
msg.spring_batch_utiliza_FlatFileItemReader = 'utilise: FlatFileItemReaderBuilder<Info>.'
msg.spring_batch_utiliza_JdbcBatchItemWriter = 'utilise: JdbcBatchItemWriterBuilder<Info>.'
msg.spring_batch_utiliza_infoItemStep = 'utilise: StepBuilderFactory.'
msg.spring_batch_utiliza_infoJob = 'utilise: JobBuilderFactory.'
msg.spring_batch_utiliza_execjob = 'utilise: stepBuilderFactory, JobLauncher.'

msg.spring_batch_depende_JobLauncher = 'dépend: JobParameters.'
msg.spring_batch_depende_infoItemStep = 'dépend: String: nome do step, int: tamanho do chunk.'
msg.spring_batch_depende_infoJob = 'dépend: String: nome do job.'
msg.spring_batch_depende_execjob = 'dépend: String: nome do job, Date: parametro do job.'
msg.spring_batch_depende_jobParametersBuilder = 'dépend: String: chave, Date: valor.'

msg.spring_batch_override_JobExecutionListenerSupport = '@Override public void afterJob(JobExecution jobExecution): executa após a execução do job.'
msg.spring_batch_override_StepExecutionListener_1 = '@Override public void beforeStep(StepExecution stepExecution): executa antes da execução do step.'
msg.spring_batch_override_StepExecutionListener_2 = '@Override public ExitStatus afterStep(StepExecution stepExecution): executa após a execução do step.'
msg.spring_batch_override_InfoItemProcessor = '@Override public Info process(Info item): função que tranforma / filtra o objeto de entrada e retorna um novo objeto.'

msg.spring_batch_get_execjob = '@GetMapping("/execjob") public String Exec(): endpoint que executa um job e retorna o resultado do console.'

msg.spring_batch_metodos_jobBuilderFactory_get = '.get(String): um nome único para o job.'
msg.spring_batch_metodos_jobBuilderFactory_listener = '.listener(JobExecutionListener): registra um listener para o evento de fim de execução do job.'
msg.spring_batch_metodos_jobBuilderFactory_listener = '.start(Step): um step que será executado.'
msg.spring_batch_metodos_stepBuilderFactory_get = '.get(String): um nome único para o step.'
msg.spring_batch_metodos_stepBuilderFactory_chunk = '.< Info, Info > chunk(int): método que define o tamanho do Chunck, a quantidade de registros salvos de uma vez.'
msg.spring_batch_metodos_stepBuilderFactory_reader = '.reader(infoItemReader()): registra o reader que será utilizado nesse step.'
msg.spring_batch_metodos_stepBuilderFactory_processor = '.processor((ItemProcessor<Info, Info>): registra o processor que será utilizado nesse step.'
msg.spring_batch_metodos_stepBuilderFactory_writer = '.writer(infoItemWriter()): registra o writer que será utilizado nesse step.'
msg.spring_batch_metodos_stepBuilderFactory_listener = '.listener(StepListener()): registra um listener.'
msg.spring_batch_metodos_jobLauncher_run = '.run(Job, JobParameters): executa esse job com esses parametros.'

msg.spring_batch_metodos_jobParametersBuilder_toJobParameters = '.toJobParameters(): retorna um novo JobParameters.'
msg.spring_batch_metodos_jobParametersBuilder_addDate = '.addDate(String, Date): cria novo parametro.'


msg.spring_batch_metodos_FlatFileItemReaderBuilder_name = '.name(String): nome único do reader.'
msg.spring_batch_metodos_FlatFileItemReaderBuilder_resource = '.resource(new ClassPathResource("f1.txt")): fonte para ser usado como input, ClassPathResource: caminho do arquivo em resources.'
msg.spring_batch_metodos_FlatFileItemReaderBuilder_delimited = '.delimited(): retorna um DelimitedBuilder<Info>.'
msg.spring_batch_metodos_FlatFileItemReaderBuilder_names = '.names(new String[]{ "id", "name", "CPF"}): utiliza os campos de entrada p / delimitar o texto do arquivo.'
msg.spring_batch_metodos_FlatFileItemReaderBuilder_fieldSetMapper = '.fieldSetMapper(FieldSetMapper<Info>): seta uma implementaçao FieldSetMapper: cria os objetos a partir dos nomes passados e dos valores lidos.'

msg.spring_batch_metodos_JdbcBatchItemWriterBuilder_itemSqlParameterSourceProvider = '.itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>()): extrai campos do item passado.'
msg.spring_batch_metodos_JdbcBatchItemWriterBuilder_sql = '.sql("INSERT INTO ..."): texto sql de insert.'
msg.spring_batch_metodos_JdbcBatchItemWriterBuilder_dataSource = '.dataSource(dataSource): bean dataSource injetado.'



export default msg