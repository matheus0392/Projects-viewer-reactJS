import { Link } from 'react-router-dom'

import logo from '/assets/logo.svg'
import '@/src/Styles/Home'

import Translate from '@/src/Util/Translate'
import Code from '@/src/Components/CodeHighligther'

const annotation	= 'spring_batch.annotation.'
const cdi 			= 'spring_batch.cdi.'
const method		= 'spring_batch.metodos.'
const override		= 'spring_batch.override.'
const rely			= 'spring_batch.depende.'
const beans			= 'spring_batch.beans.'
const used			= 'spring_batch.utilizado.'
const use			= 'spring_batch.utiliza.'

function Methods() {
	return (
		<div className="App">
			<header className="App-header">

				<Link to={"/"}>Home</Link>

				<p>{Translate('metodos')}</p>

				<Code code={`
${Translate(annotation+'EnableBatchProcessing')}

${Translate(cdi+'dataSource')}

${Translate(cdi+'JobBuilderFactory')}
	${Translate(use+'JobBuilderFactory')}
	${Translate(used+'JobBuilderFactory')}

${Translate(cdi+'StepBuilderFactory')}
	${Translate(use+'StepBuilderFactory')}
	${Translate(used+'StepBuilderFactory')}

${Translate(cdi+'JobLauncher')}
	${Translate(rely+'JobLauncher')}
	${Translate(use+'JobLauncher')}
	${Translate(used+'JobLauncher')}

${Translate(beans+'JobExecutionListenerSupport')}
	${Translate(override+'JobExecutionListenerSupport')}
	${Translate(used+'JobExecutionListenerSupport')}


${Translate(beans+'StepExecutionListener')}
	${Translate(override+'StepExecutionListener_1')}
	${Translate(override+'StepExecutionListener_2')}
	${Translate(used+'StepExecutionListener')}

${Translate(beans+'InfoItemProcessor')}
	${Translate(override+'InfoItemProcessor')}
	${Translate(used+'InfoItemProcessor')}


${Translate(beans+'FlatFileItemReader')}
	${Translate(used+'FlatFileItemReader')}
	${Translate(use+'FlatFileItemReader')}

${Translate(beans+'JdbcBatchItemWriter')}
	${Translate(used+'JdbcBatchItemWriter')}
	${Translate(use+'JdbcBatchItemWriter')}

${Translate(beans+'infoItemStep')}
	${Translate(rely+'infoItemStep')}
	${Translate(used+'infoItemStep')}
	${Translate(use+'infoItemStep')}

${Translate(beans+'infoJob')}
	${Translate(rely+'infoJob')}
	${Translate(used+'infoJob')}
	${Translate(use+'infoJob')}

${Translate('spring_batch.get.execjob')}
	${Translate(rely+'execjob')}
	${Translate(use+'execjob')}

	jobBuilderFactory
${Translate(method+'jobBuilderFactory.get')}
${Translate(method+'jobBuilderFactory.listener')}
${Translate(method+'jobBuilderFactory.listener')}

stepBuilderFactory
${Translate(method+'stepBuilderFactory.get')}
${Translate(method+'stepBuilderFactory.chunk')}
${Translate(method+'stepBuilderFactory.reader')}
${Translate(method+'stepBuilderFactory.processor')}
${Translate(method+'stepBuilderFactory.writer')}
${Translate(method+'stepBuilderFactory.listener')}

jobLauncher
${Translate(method+'jobLauncher.run')}

jobParametersBuilder
${Translate(method+'jobParametersBuilder.toJobParameters')}
${Translate(method+'jobParametersBuilder.addDate')}
	${Translate(rely+'jobParametersBuilder')}

FlatFileItemReaderBuilder<Object>()
${Translate(method+'FlatFileItemReaderBuilder.name')}
${Translate(method+'FlatFileItemReaderBuilder.resource')}
${Translate(method+'FlatFileItemReaderBuilder.delimited')}
${Translate(method+'FlatFileItemReaderBuilder.names')}
${Translate(method+'FlatFileItemReaderBuilder.fieldSetMapper')}

JdbcBatchItemWriterBuilder<Objeto>()
${Translate(method+'JdbcBatchItemWriterBuilder.itemSqlParameterSourceProvider')}
${Translate(method+'JdbcBatchItemWriterBuilder.sql')}
${Translate(method+'JdbcBatchItemWriterBuilder.dataSource')}
	`} />
			</header>
		</div>
	);
}

export default Methods