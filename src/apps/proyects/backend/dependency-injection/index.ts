import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

async function container(): Promise<ContainerBuilder>{
    const containerBuild = new ContainerBuilder();
    const loader = new YamlFileLoader(containerBuild);
    const env = process.env.NODE_ENV || 'dev';
    await loader.load(`${__dirname}/application_${env}.yaml`);
    return containerBuild;
}

export default container;
