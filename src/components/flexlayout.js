import React from "react"
import PropTypes from "prop-types"

export default function Layout({ justify, align, direction, classname, children }) {
  return (
    <div style={{ display: 'flex', justifyContent: justify, alignItems: align, flexDirection: direction }} >
      {children}
    </div>
  )
}

Layout.defaultProps = {
  justify: 'flex-start',
  align: 'flex-start',
  direction: 'row',
  classname: null
}

Layout.propTypes = {
  justify: PropTypes.oneOf(['flex-start','flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  align: PropTypes.oneOf(['flex-start','flex-end', 'center', 'stretch']),
  direction: PropTypes.oneOf(['column', 'row']),
  classname: PropTypes.object,
}