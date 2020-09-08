import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import propTypes from "prop-types"

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `http://natazevedo.com.br/${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="natazevedo"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}

export default Comments