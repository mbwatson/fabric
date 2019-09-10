import React, { useState } from 'react'
import { Button } from '../Button'
import { Paragraph } from '../Typography'
import { FormControl } from './FormControl'
import { Select, Option } from './Select'
import { TextareaInput } from './TextAreaInput'

export const ContactForm = props => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState(0)
    const [messageSent, setMessageSent] = useState(false)
    
    const messageTypes = [
        {
            text: 'Question',
            placeholder: 'How do I do this weird thing?',
        },
        {
            text: 'Technical difficulty',
            placeholder: 'I\'m having so much trouble!',
        },
        {
            text: 'Suggestion',
            placeholder: 'You know what would be really cool?',
        },
        {
            text: 'Praise',
            placeholder: 'Wow, this is such a great resource!',
        },
        {
            text: 'Other',
            placeholder: 'So, here\'s a random question...',
        },
    ]

    const handleChangeType = event => {
        setType(event.target.value)
    }

    const handleChangeMessage = event => {
        setMessage(event.target.value)
    }

    const handleSubmitMessage = event => {
        console.log('Submitting message:', message)
        setMessageSent(true)
    }

    return !messageSent ? (
        <FormControl>
            <Select name="message-type-select" id="message-type-select" onChange={ handleChangeType } value={ type }>
                { messageTypes.map(({ text }) => text).map((text, i) => <Option key={ i } value={ i }>{ text }</Option>) }
            </Select>
            <TextareaInput placeholder={ messageTypes[type].placeholder } value={ message } onChange={ handleChangeMessage } />
            <Button onClick={ handleSubmitMessage }>Submit</Button>
        </FormControl>
    ) : (
        <Paragraph style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem' }}>
            Thanks&mdash;your feedback is appreciated!
        </Paragraph>
    )
}
