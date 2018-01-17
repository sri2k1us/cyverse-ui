import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ListItem, Divider } from 'material-ui';
import { Title } from 'cyverse-ui';
import SideBar from './SideBar';

class SideNav extends React.Component {
    render() {
        const { router } = this.props;

        function createListItem(baseUrl, item) {
            const primaryText = item[0];
            const fragment = item[1];
            const route = `${baseUrl}/${fragment}`;
            const styles = {};

            if (router.isActive(route)) {
                styles.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            }

            return (
                <ListItem
                    key={route}
                    primaryText={primaryText}
                    style={styles}
                    onClick={() => {
                        router.push(route);
                    }}
                />
            );
        }

        return (
            <SideBar isOpen >
                <Title h1
                    title
                    mb={ 2 }
                    ps={ 3 }
                >
                    Table of Contents
                </Title>
                <Divider/>
                <ListItem
                    primaryText="Using The Theme"
                    primaryTogglesNestedList={true}
                    initiallyOpen={false}
                    nestedItems={[
                        ['CyVerse Theme', 'cyverse-theme'],
                        ['CyVerse Theme Colors', 'cyverse-theme-colors'],
                        ['Installing the CyVerse Theme', 'installing-the-cyverse-theme'],
                        ['muiThemeable', 'mui-themeable']
                    ].map(createListItem.bind(null, '/using-the-theme'))}
                />
                <ListItem
                    primaryText="Components"
                    primaryTogglesNestedList={true}
                    initiallyOpen={false}
                    nestedItems={[
                        ['Action Group', 'action-group'],
                        ['Button Menu', 'button-menu'],
                        ['Checkable Avatar', 'checkable-avatar'],
                        ['Element', 'element'],
                        ['Floating Action Button', 'floating-action-button'],
                        ['Identity', 'identity'],
                        ['Info Block', 'info-block'],
                        ['List Card', 'list-card'],
                        ['List Card Actions', 'list-card-actions'],
                        ['List Card Detail', 'list-card-detail'],
                        ['List Card Header', 'list-card-header'],
                        ['List Card Identity', 'list-card-identity'],
                        ['List Card Summary', 'list-card-summary'],
                        ['Media Card', 'media-card'],
                        ['Media Card Group', 'media-card-group'],
                        ['Meter Guage', 'meter-guage'],
                        ['Pill', 'pill'],
                        ['Progress Avatar', 'progress-avatar'],
                        ['Search Bar', 'search-bar'],
                        ['Show More Ellipsis', 'show-more-ellipsis'],
                        ['Skeleton List', 'skeleton-list'],
                        ['Subheader', 'subheader'],
                        ['Summary Text', 'summary-text'],
                        ['Tooltip', 'tooltip'],
                        ['Vertical Menu', 'vertical-menu']
                    ].map(createListItem.bind(null, '/components'))}
                />
                {createListItem('', ['SVG Icons', 'svg-icons'])}
            </SideBar>
        )
    }
}

export default withRouter(SideNav);
