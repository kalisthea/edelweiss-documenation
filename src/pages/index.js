import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';


import React from 'react';
import Head from '@docusaurus/Head';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}




export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <title>Risk Modeling Documentation</title>
      </Head>
      <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px' }}>
        <h1>👋 Welcome to Risk Modeling Documentation!</h1>
        {/* Add your custom content here */}
      </div>
      <main className="container margin-vert--lg">
         <h1>Documentation Guideline!</h1>
         <p>Welcome to the <Translate id="documentation.riskModelingDocumentation">Risk Modeling Documentation</Translate> 📝!</p>
         <p>Here are steps on managing a tidy and detailed documentation.</p>

         <div style={{ backgroundColor: '#e0f7fa', padding: '16px', borderRadius: '4px', marginBottom: '16px' }}>
           <Translate id="documentation.businessInquiriesBlueBox">For Business Inquires use a blue box</Translate>
         </div>

         <CodeBlock className="language-javascript">
           {`#For code use
 createCharacter({
   method: 'post',
   data: {
     name: 'Wizard Erihann',
     level: 18,
     inventory: ["Wand", "Potion", 50]
   }
 });`}
         </CodeBlock>


      </main>

      {/* <hr></hr>

      <main className="container margin-vert--lg">
         <h1>Contents</h1>
         <section className={styles.features}>
            <div className="container">
              <div className="row">
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
      </main> */}
    </Layout>
  );
}

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout>
//       <header className={clsx('hero hero--primary', styles.heroBanner)}>
//         <div className="container">
//           <Heading as="h1" className="hero__title">
//             {siteConfig.title}
//           </Heading>
//           <p className="hero__subtitle">{siteConfig.tagline}</p>
//           <div className={styles.buttons}>
//             <Link
//               className="button button--secondary button--lg"
//               to="/docs/intro">
//               Docusaurus Tutorial - 5min ⏱️
//             </Link>
//           </div>
//         </div>
//       </header>
//     </Layout>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
    
//     </Layout>
//   );
// }
