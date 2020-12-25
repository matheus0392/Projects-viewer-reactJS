const fr = {
    spring_batch: {
        annotation: [
            { info: "@EnableBatchProcessing", desc: "Annotation qui configure le for Spring Batch pour une application et automatiquemet crée beans pour JobRepository, JobLauncher, JobRegistry, PlatformTransactionManager, JobBuilderFactory and StepBuilderFactory." }
        ],
        cdi: [
            { info: 'JobBuilderFactory', desc: 'Objet qui crée jobs' }
        ],
        metodos: [
            { info: "FlatFileItemReader<Info> infoItemReader()", desc: "cria um leitor de arquivo para o step" },
        ]
    }
}

let  msg={}

msg.language="Langue"
msg.pt="Portuguais"
msg.fr="Fraçais"

msg.spring_batch={}
msg.spring_batch.annotation={}
msg.spring_batch.annotation.EnableBatchProcessing="Annotation qui configure le for Spring Batch pour une application et automatiquemet crée beans pour JobRepository, JobLauncher, JobRegistry, PlatformTransactionManager, JobBuilderFactory and StepBuilderFactory."

msg.spring_batch.cdi={}
msg.spring_batch.cdi.JobBuilderFactory='Objet que cria jobs'

msg.spring_batch.metodos={}
msg.spring_batch.metodos.infoItemReader="Cria um leitor de arquivo para o step"


export default  msg