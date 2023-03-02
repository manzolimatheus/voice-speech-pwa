import React from 'react'
import styled from '@emotion/styled'

const AppContainer = styled.div`
    font-family: 'Inter', sans-serif;
    overflow: hidden;
`

const App = ({children}) => {
    return (
        <AppContainer>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                rel="stylesheet"
            />
            <div>{children}</div>
        </AppContainer>
    )
}

export default App
