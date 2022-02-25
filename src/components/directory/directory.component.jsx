import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

class Directory extends React.Component {
    render() {    
        return (
            <div className="directory-menu">
                {
                    this.props.sections.map(({  id, ...otherSectionItems }) => (
                        <MenuItem
                            key={id}
                            {...otherSectionItems}
                            {...this.props}
                        />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = ({directory}) => ({
    sections: directory.sections
});

export default connect(mapStateToProps)(Directory);