import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import Code from '@/src/Components/CodeHighligther'

const annotation = 'spring_batch_annotation_'
const cdi = 'spring_batch_cdi_'
const method = 'spring_batch_metodos_'
const override = 'spring_batch_override_'
const rely = 'spring_batch_depende_'
const beans = 'spring_batch_beans_'
const used = 'spring_batch_utilizado_'
const use = 'spring_batch_utiliza_'

function Methods() {

	const { t } = useTranslation()
	return (
		<div className="methods">
			<header className="api-header" >
				<div>
					<span>
						<h3>
							<Link to={"/"}>{t('inicio')}</Link>
						</h3>
					</span>
					<span>
						<h3>
							<Link to={"/api"}>API REST</Link>
						</h3>
					</span>
				</div>
				<div>
					<h2>{t('metodos')}</h2>
				</div>
			</header>
			<div>
				<Code code={`
${t(annotation + 'EnableBatchProcessing')}

${t(cdi + 'dataSource')}

${t(cdi + 'JobBuilderFactory')}
	${t(use + 'JobBuilderFactory')}
	${t(used + 'JobBuilderFactory')}

${t(cdi + 'StepBuilderFactory')}
	${t(use + 'StepBuilderFactory')}
	${t(used + 'StepBuilderFactory')}

${t(cdi + 'JobLauncher')}
	${t(rely + 'JobLauncher')}
	${t(use + 'JobLauncher')}
	${t(used + 'JobLauncher')}

${t(beans + 'JobExecutionListenerSupport')}
	${t(override + 'JobExecutionListenerSupport')}
	${t(used + 'JobExecutionListenerSupport')}


${t(beans + 'StepExecutionListener')}
	${t(override + 'StepExecutionListener_1')}
	${t(override + 'StepExecutionListener_2')}
	${t(used + 'StepExecutionListener')}

${t(beans + 'InfoItemProcessor')}
	${t(override + 'InfoItemProcessor')}
	${t(used + 'InfoItemProcessor')}


${t(beans + 'FlatFileItemReader')}
	${t(used + 'FlatFileItemReader')}
	${t(use + 'FlatFileItemReader')}

${t(beans + 'JdbcBatchItemWriter')}
	${t(used + 'JdbcBatchItemWriter')}
	${t(use + 'JdbcBatchItemWriter')}

${t(beans + 'infoItemStep')}
	${t(rely + 'infoItemStep')}
	${t(used + 'infoItemStep')}
	${t(use + 'infoItemStep')}

${t(beans + 'infoJob')}
	${t(rely + 'infoJob')}
	${t(used + 'infoJob')}
	${t(use + 'infoJob')}

${t('spring_batch_get_execjob')}
	${t(rely + 'execjob')}
	${t(use + 'execjob')}

jobBuilderFactory
${t(method + 'jobBuilderFactory_get')}
${t(method + 'jobBuilderFactory_listener')}
${t(method + 'jobBuilderFactory_listener')}

stepBuilderFactory
${t(method + 'stepBuilderFactory_get')}
${t(method + 'stepBuilderFactory_chunk')}
${t(method + 'stepBuilderFactory_reader')}
${t(method + 'stepBuilderFactory_processor')}
${t(method + 'stepBuilderFactory_writer')}
${t(method + 'stepBuilderFactory_listener')}

jobLauncher
${t(method + 'jobLauncher_run')}

jobParametersBuilder
${t(method + 'jobParametersBuilder_toJobParameters')}
${t(method + 'jobParametersBuilder_addDate')}
	${t(rely + 'jobParametersBuilder')}

FlatFileItemReaderBuilder<Info>()
${t(method + 'FlatFileItemReaderBuilder_name')}
${t(method + 'FlatFileItemReaderBuilder_resource')}
${t(method + 'FlatFileItemReaderBuilder_delimited')}
${t(method + 'FlatFileItemReaderBuilder_names')}
${t(method + 'FlatFileItemReaderBuilder_fieldSetMapper')}

JdbcBatchItemWriterBuilder<Info>()
${t(method + 'JdbcBatchItemWriterBuilder_itemSqlParameterSourceProvider')}
${t(method + 'JdbcBatchItemWriterBuilder_sql')}
${t(method + 'JdbcBatchItemWriterBuilder_dataSource')}
	`} />
			</div>
		</div>
	);
}

export default Methods