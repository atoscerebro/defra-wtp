import { H1, FormGroup, Radio, Paragraph, Caption, Button} from 'govuk-react';
import { DisplayInputField } from '../display-input-field';
import { BaseTaskPage } from './base-task-page';
import { useState } from 'react';
import { CaptionWrapper } from './styled-components';
import { WASTE_CODES_LABELS } from './constants';

const WasteCodes = () => {
    
    const [wasteCode, setWasteCode] = useState('')

    return <>
        <BaseTaskPage component={<>
            <H1 size="LARGE">What is the waste code?</H1>
            <CaptionWrapper>
                <Caption size="M">Select one option.</Caption>
            </CaptionWrapper>
            <Radio name='waste-codes' onClick={() => setWasteCode(WASTE_CODES_LABELS.BASEL_ANNEX_IX)}>{WASTE_CODES_LABELS.BASEL_ANNEX_IX}</Radio>
            {wasteCode === WASTE_CODES_LABELS.BASEL_ANNEX_IX && 
                <DisplayInputField onChange={setWasteCode} input={'ref-number'} label={'Start typing, then choose from the list'}/>
            }
            <Radio name='waste-codes' onClick={() => setWasteCode(WASTE_CODES_LABELS.OECD)}>{WASTE_CODES_LABELS.OECD}</Radio>
            {wasteCode === WASTE_CODES_LABELS.OECD && 
                <DisplayInputField onChange={setWasteCode} input={'ref-number'} label={'Start typing, then choose from the list'}/>
            }
            <Radio name='waste-codes'onClick={() => setWasteCode(WASTE_CODES_LABELS.ANNEX_IIIA)}>{WASTE_CODES_LABELS.ANNEX_IIIA}</Radio>
            {wasteCode === WASTE_CODES_LABELS.ANNEX_IIIA && 
                <DisplayInputField onChange={setWasteCode} input={'ref-number'} label={'Start typing, then choose from the list'}/>
            }
            <Radio name='waste-codes' onClick={() => setWasteCode(WASTE_CODES_LABELS.ANNEX_IIIB)}>{WASTE_CODES_LABELS.ANNEX_IIIB}</Radio>
            {wasteCode === WASTE_CODES_LABELS.ANNEX_IIIB && 
                <DisplayInputField onChange={setWasteCode} input={'ref-number'} label={'Start typing, then choose from the list'}/>
            }
            <Paragraph>or</Paragraph>
            <Radio name='waste-codes' hint="Only select this option if the waste is going to a laboratory">Not applicable</Radio>
            <Button>
                Save and continue
            </Button>
        </>}/>
    </>
}

export default WasteCodes