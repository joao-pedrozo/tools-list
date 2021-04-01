import Head from 'next/head';
import * as S from '../styles/home';

import Search from '../components/Search';

export default function Home() {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>VUTTR</S.Title>
        <S.Subtitle>Very Useful Tools to Remember</S.Subtitle>
        <S.InlineTooling>
          <S.InlineToolingSearchArea></S.InlineToolingSearchArea>
          <S.InlineToolingAddArea></S.InlineToolingAddArea>
        </S.InlineTooling>
        <Search />
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
