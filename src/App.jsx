import React from 'react'
// import left from './left-arrow.svg'
// import right from './right-arrow.svg'
import Slider from './components/slider'
import styled from 'styled-components'
import './index.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const slides = [
    {
      id: 1,
      image: 'https://picsum.photos/id/237/1000/400'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/238/1000/400'
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/239/1000/400'
    }
  ]
  const text = [
    {
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
      image: 'https://picsum.photos/id/137/500/400'
    },
    {
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
      image: 'https://picsum.photos/id/338/500/400'
    },
    {
      text: 'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      image: 'https://picsum.photos/id/139/500/400'
    }
  ]
  return (
    <div className="App">
      <div className="container">
        <Header large>Another react slider usage examples</Header>
        <Header>Basic usage with autoplay</Header>
        <Slider slideEl={Slide} autoPlay={4000} data={slides} />
        <SyntaxHighlighter language="javascript" style={ocean}>
          {`
            import React from 'react'

            export default () => {
              const slides = [
                {
                  id: 1,
                  image: 'https://picsum.photos/id/237/1000/400'
                },
                {
                  id: 2,
                  image: 'https://picsum.photos/id/238/1000/400'
                },
                {
                  id: 3,
                  image: 'https://picsum.photos/id/239/1000/400'
                }
              ]
              const Slide = ({ data: { image } }) => <img src={image} alt="" />

              return <Slider slideEl={Slide} autoPlay={4000} data={slides} />
            }
          `}
        </SyntaxHighlighter>
        <div style={{ margin: '10px 0' }} />
        <Header>Mixed content with hidden dots navigation</Header>
        <Slider slideEl={TextSlide} data={text} hideDots />
        <SyntaxHighlighter language="javascript" style={ocean}>
          {`
            import React from 'react'

            export default () => {
              const text = [
                {
                  text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
                  image: 'https://picsum.photos/id/137/500/400'
                },
                {
                  text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
                  image: 'https://picsum.photos/id/338/500/400'
                },
                {
                  text: 'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
                  image: 'https://picsum.photos/id/139/500/400'
                }
              ]
              const TextSlideWrap = styled.div\`
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                    
                .slide__text {
                    font - family: Arial, sans-serif
                    font-size: 16px;
                    text-align: center;
                    padding: 50px;
                  }
                \`
              const TextSlide = ({ data }) => {
                return (
                  <TextSlideWrap>
                    <div className="slide__text">{data.text}</div>
                    <img className="slide__image" src={data.image} alt="" />
                  </TextSlideWrap>
                )
              }

              return <Slider slideEl={TextSlide} data={text} hideDots />
            }
          `}
        </SyntaxHighlighter>
        <div style={{ margin: '10px 0' }} />
        <Header>Custom navigation arrows and dots</Header>
        <Slider
          slideEl={Slide}
          data={slides}
          // navPrevEl={CustomPrev}
          // navNextEl={CustomNext}
          navDotEl={FlatDot}
        />
        <SyntaxHighlighter language="javascript" style={ocean}>
          {`
            import React from 'react'

            export default () => {
              const slides = [
                {
                  id: 1,
                  image: 'https://picsum.photos/id/237/1000/400'
                },
                {
                  id: 2,
                  image: 'https://picsum.photos/id/238/1000/400'
                },
                {
                  id: 3,
                  image: 'https://picsum.photos/id/239/1000/400'
                }
              ]
              const Slide = ({ data: { image } }) => <img src={image} alt="" />
              const NavWrap = styled.div\`
                position: absolute;
                bottom: 20px;
                padding: 8px 10px;
                background-color: rgba(255,255,255,.5);
                cursor: pointer;
                transition: background-color .3s;
                &:hover {
                  background-color: rgba(255,255,255,.9);
                }
              \`
              const NextWrap = styled(NavWrap)\`
                left 60px;
              \`
              const PrevWrap = styled(NavWrap)\`
                left 10px;
              \`
              const CustomPrev = () => <PrevWrap><img src={left} width={20} height={20} alt="Previous slide" /></PrevWrap>
              const CustomNext = () => <NextWrap><img src={right} width={20} height={20} alt="Next slide" /></NextWrap>
              const FlatDot = styled.div\`
                width: 10px;
                height: 5px;
                background-color: rgba(255,255,255,.9);
                &.active {
                  background-color: #4a4a4a;
                }
              \`

              return <Slider slideEl={Slide} data={slides} navPrevEl={CustomPrev} navNextEl={CustomNext} navDotEl={FlatDot} />
            }
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

const Header = styled.div`
  font-size: ${({large}) => large ? '22px' : '18px'};
  font-weight: bold;
  font-family: Arial, sans-serif;
  margin: 20px 0;
`

const Slide = ({ data: { image } }) => <img src={image} alt="" />
const TextSlideWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
      
  .slide__text {
      font - family: Arial, sans-serif
      font-size: 16px;
      text-align: center;
      padding: 50px;
    }
  `
const TextSlide = ({ data }) => {
  return (
    <TextSlideWrap>
      <div className="slide__text">{data.text}</div>
      <img className="slide__image" src={data.image} alt="" />
    </TextSlideWrap>
  )
}

const NavWrap = styled.div`
  position: absolute;
  bottom: 20px;
  padding: 8px 10px;
  background-color: rgba(255,255,255,.5);
  cursor: pointer;
  transition: background-color .3s;
  &:hover {
    background-color: rgba(255,255,255,.9);
  }
`
const NextWrap = styled(NavWrap)`
  left 60px;
`
const PrevWrap = styled(NavWrap)`
  left 10px;
`

// const CustomPrev = () => <PrevWrap><img src={left} width={20} height={20} alt="Previous slide" /></PrevWrap>
// const CustomNext = () => <NextWrap><img src={right} width={20} height={20} alt="Next slide" /></NextWrap>
const FlatDot = styled.div`
  width: 10px;
  height: 5px;
  background-color: rgba(255,255,255,.9);
  &.active {
    background-color: #4a4a4a;
  }
`

export default App;