import * as React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Grid from "./components/Grid";
import { fonts } from "./styles";

const SLayout = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const SContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const SColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
    <SContent>
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
    </SContent>
  </SLayout>
);

export default App;
