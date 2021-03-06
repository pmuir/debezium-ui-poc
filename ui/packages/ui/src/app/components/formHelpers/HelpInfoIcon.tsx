import {
  Popover
} from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import React from 'react';

export interface IHelpInfoIconProps {
  label: string,
  description: string,
}

export const HelpInfoIcon = (props: IHelpInfoIconProps) => {
  return (
    <Popover
      headerContent={
        <div>
          {props.label}
        </div>
      }
      bodyContent={<div>{props.description}</div>}
    >
      <button
        onClick={e => e.preventDefault()}
        className="pf-c-form__group-label-help"
      >
        <HelpIcon />
      </button>
    </Popover>
  )
}