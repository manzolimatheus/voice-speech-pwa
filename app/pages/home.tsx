import React, {useState, useEffect, useRef} from 'react'
import {
    Container,
    SearchInput,
    VoiceButton,
    ListeningContainer,
    PulseText,
    Badge,
    Iframe,
    ProductList,
    ProductTile,
    StopButton
} from './homeStyle'

export default function Home() {
    const inputRef = useRef('')
    const [firstRender, setFirstRender] = useState(true)
    const [text, setText] = useState('')
    const [isListening, setIsListening] = useState(false)
    const [hasVoiceSupport, setHasVoiceSupport] = useState(false)
    const [products, setProducts] = useState({
        products: []
    })

    // Check if browser has voice support
    useEffect(() => {
        if (window.SpeechRecognition || window.webkitSpeechRecognition) {
            setHasVoiceSupport(true)
        }
    }, [])

    const searchInProducts = () => {
        setProducts({
            products: []
        })
        const route = `https://dummyjson.com/products/search?q=${text}`

        fetch(route)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            })
    }

    const GetSpeech = () => {
        if (firstRender) setFirstRender(false)

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

        const recognition = new SpeechRecognition()
        recognition.lang = 'pt-BR'

        recognition.onstart = () => {
            setIsListening(true)
        }

        recognition.onspeechend = () => {
            recognition.stop()
            setIsListening(false)
        }

        recognition.onresult = (result) => {
            const transcript = result.results[0][0].transcript
            setText(transcript)
            inputRef.current.value = transcript
        }

        recognition.start()
    }

    const stopSpeech = () => {
        setIsListening(false)
    }

    const handleSearch = (e) => {
        if (firstRender) setFirstRender(false)
        const {value} = e.target

        setText(value)
    }

    useEffect(() => {
        searchInProducts()
    }, [text])

    return (
        <div>
            <Container>
                <SearchInput
                    type="search"
                    placeholder="Pesquise Aqui..."
                    onChange={handleSearch}
                    onSearch={handleSearch}
                    ref={inputRef}
                />
                {hasVoiceSupport && <VoiceButton onClick={GetSpeech}>🎤</VoiceButton>}
            </Container>
            {isListening && (
                <ListeningContainer>
                    <PulseText>{isListening ? '🎤 Ouvindo sua linda voz...' : null}</PulseText>
                    <StopButton onClick={stopSpeech}>🛑 Cancelar</StopButton>
                </ListeningContainer>
            )}
            {firstRender && (
                <>
                    <h1>
                        {hasVoiceSupport ? 'Diga ou digite' : 'Digite'} para procurar por seu
                        produto
                    </h1>
                    <Badge>Tente palavras como "Iphone", "HP", "Samsung"</Badge>
                    <Iframe
                        src="https://embed.lottiefiles.com/animation/103853"
                        frameBorder="0"
                    ></Iframe>
                </>
            )}
            {text && (
                <div>
                    <h1>Pesquisando por {text}</h1>
                    <Badge>Produtos encontrados ({products.products.length})</Badge>
                </div>
            )}
            {text && products.products.length === 0 && <h3>Nenhum produto encontrado</h3>}
            {!firstRender && products.products.length > 0 && <h1>Exibindo todos os produtos</h1>}
            <ProductList>
                {!firstRender &&
                    products.products.length > 0 &&
                    products.products.map((product) => {
                        return (
                            <ProductTile key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h1>{product.title}</h1>
                                <h3>${product.price}</h3>
                                <p>{product.description}</p>
                            </ProductTile>
                        )
                    })}
            </ProductList>
        </div>
    )
}
