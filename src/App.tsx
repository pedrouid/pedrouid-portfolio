import * as React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Grid from "./components/Grid";
import { fonts } from "./styles";

const SLayout = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const SSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const SCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SHero = styled(SColumn)`
  max-width: 600px;
`;

const SAppLabel = styled.div`
  margin: 0;
  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.size.h4};
`;

const SAppField = styled.div`
  margin: 0;
  margin-top: 8px;
  font-weight: ${fonts.weight.semibold};
  font-size: ${fonts.size.h2};
`;

const App = () => (
  <SLayout>
    <SSection>
      <SCenter>
        <SHero>
          <h1>{`Pedro Gomes`}</h1>
          <p>{`Full Stack Developer`}</p>
          <p>{`Berlin, Germany`}</p>
        </SHero>
      </SCenter>
    </SSection>
    <SSection>
      <Grid itemMaxWidth={210} itemMaxHeight={160} gap={10}>
        <a href="/" target="_blank" rel="noreferrer noopener">
          <Card shadow>
            <SColumn>
              <SAppLabel>{`Project A`}</SAppLabel>
              <SAppField>{`bla bla bla`}</SAppField>
            </SColumn>
          </Card>
        </a>
        <a href="/" target="_blank" rel="noreferrer noopener">
          <Card shadow>
            <SColumn>
              <SAppLabel>{`Project b`}</SAppLabel>
              <SAppField>{`lol lol lol`}</SAppField>
            </SColumn>
          </Card>
        </a>
      </Grid>
    </SSection>
  </SLayout>
);

export default App;
