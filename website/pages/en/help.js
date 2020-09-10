/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more in this [Docusaurus documentation](https://docusaurus.io/docs/en/installation)`,
      title: 'What is Docusaurus?',
    },
    {
      content: 'Find your answer [here](https://www.addictionacademy.com/2017/03/the-importance-of-documentation/#:~:text=Documentation%20help%20ensure%20consent%20and,the%20reasoning%20for%20such%20services.)',
      title: 'Why Documentation is Important?',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>What is it?</h1>
          </header>
          <p>This is a dummy project to help me learn how to use Docusaurus properly.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
