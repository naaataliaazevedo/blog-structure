import React from "react"
import propTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const RecommendedPosts = ({ next, previous }) => {

  return (
    <S.RecommendedWrapper>
      {previous && (
        <S.RecommendedLink
          to={previous.fields.slug}
          className="previous"
          cover
          direction="left"
          duration={0.6}
          bg={getThemeColor()}
        >
          {previous.frontmatter.title}
        </S.RecommendedLink>
      )}

      {next && (
        <S.RecommendedLink
          to={next.fields.slug}
          className="next"
          cover
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
        >
          {next.frontmatter.title}
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  )
}

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
