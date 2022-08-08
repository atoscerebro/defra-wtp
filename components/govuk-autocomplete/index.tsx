import Autocomplete from 'accessible-autocomplete/react';
import { FC } from 'react';

interface IProps {
    options: string[]
}

export const GovUKAutocomplete: FC<IProps> = ({options}) => {

    const suggest = (query: string, populateResults: any, results: any) => {
        const filteredResults = results.filter((result: any) => result.indexOf(query) !== -1)
        populateResults(filteredResults)
    }

    return (
        <Autocomplete id='autocomplete' source={(query: string, populateResults: any) => suggest(query, populateResults, options)} />

    )
}