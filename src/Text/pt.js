const pt = {
    spring_batch: {
        annotation: [
            { info: "@EnableBatchProcessing", desc: "Annotation adds autoconfiguration for Spring Batch to an application and automatically creates beans for a JobRepository, JobLauncher, JobRegistry, PlatformTransactionManager, JobBuilderFactory and StepBuilderFactory." }
        ],
        cdi: [
            { info: 'JobBuilderFactory', desc: 'Objet que cria jobs' }
        ],
        metodos: [
            { info: "FlatFileItemReader<Info> infoItemReader()", desc: "Cria um leitor de arquivo para o step" },
        ]
    }
}

let  msg={}

msg.language="Língua"
msg.pt="Português"
msg.fr="Fracês"

msg.spring_batch={}
msg.spring_batch.annotation={}
msg.spring_batch.annotation.EnableBatchProcessing="Annotation adds autoconfiguration for Spring Batch to an application and automatically creates beans for a JobRepository, JobLauncher, JobRegistry, PlatformTransactionManager, JobBuilderFactory and StepBuilderFactory."

msg.spring_batch.cdi={}
msg.spring_batch.cdi.JobBuilderFactory='Objet que cria jobs'

msg.spring_batch.metodos={}
msg.spring_batch.metodos.infoItemReader="Cria um leitor de arquivo para o step"


export default msg