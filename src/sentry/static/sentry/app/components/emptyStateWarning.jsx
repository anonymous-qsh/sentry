import React from 'react';
import styled from 'react-emotion';
import {Panel, PanelBody} from './panels';

class EmptyStateWarning extends React.Component {
  render() {
    return (
      <Panel className="ref-empty-state">
        <PanelBody>
          <EmptyStreamWrapper>
            <Icon className="icon icon-exclamation" />
            {this.props.children}
          </EmptyStreamWrapper>
        </PanelBody>
      </Panel>
    );
  }
}

const EmptyStreamWrapper = styled.div`
  text-align: center;
  font-size: 22px;
  padding: 48px 0;

  p {
    line-height: 1.2;
    margin: 0 auto 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Icon = styled.div`
  display: block;
  font-size: 54px;
  color: ${p => p.theme.gray2}
  margin-bottom: 20px;
  opacity: 0.45;
`;

export default EmptyStateWarning;
