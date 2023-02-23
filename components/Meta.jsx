import Head from 'next/head'
import React from 'react'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta charSet='utf-8' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}

Meta.defaultProps = {
    title: 'Regrev Technology | AWS Cloud Services Partner',
    keywords: 'regrev, technology, cloud, machine learning, artificial intelligence, AI, cloud migration, data lake, data analytics, AWS, Amazon Web Services Partner Network, MLOps, DevOps, CI/CD, cloud solution architecture, cloud security, IAC, microservices, containers, data governance, data engineering',
    description: 'Regrev Technology, an AWS Cloud Services Partner, is a one-stop-shop for all your cloud-based infrastructure and services.',
}

export default Meta