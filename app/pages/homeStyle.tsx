import styled from '@emotion/styled'

export const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const SearchInput = styled('input')`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const VoiceButton = styled('button')`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    outline: none;
    cursor: pointer;
`

export const ListeningContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
`

export const PulseText = styled('h1')`
    animation: Pulse 1s infinite;

    @keyframes Pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`

export const ProductList = styled('div')`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }
`

export const ProductTile = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 400px;
    overflow: hidden;
    padding: 2%;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: transform 0.5s;
    }

    img:hover {
        transform: scale(1.1);
    }

    h1,
    h3,
    p {
        padding: 0;
        margin: 0;
    }
`

export const Iframe = styled('iframe')`
    width: 100%;
    height: 50vh;
`

export const Badge = styled('span')`
    background-color: #f0f0f0;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
`

export const StopButton = styled('button')`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    outline: none;
    cursor: pointer;
`