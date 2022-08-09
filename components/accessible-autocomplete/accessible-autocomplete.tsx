import { HintText, LabelText } from 'govuk-react';
import Autocomplete from 'accessible-autocomplete/react';
import { FC } from 'react';

interface IProps {
  options: string[];
  hintText?: string;
  label?: string;
}

export const AccessibleAutocomplete: FC<IProps> = ({
  options,
  hintText,
  label,
}) => {
  const suggest = (query: string, populateResults: any, results: any) => {
    const filteredResults = results.filter(
      (result: any) => result.indexOf(query) !== -1,
    );
    populateResults(filteredResults);
  };

  return (
    <>
      {label && <LabelText>{label}</LabelText>}
      {hintText && <HintText>{hintText}</HintText>}
      <Autocomplete
        id="autocomplete"
        source={(query: string, populateResults: any) =>
          suggest(query, populateResults, options)
        }
      />
    </>
  );
};
