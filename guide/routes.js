import React from 'react';
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';

/**
 * The Master route wraps the entire application
 */
import Master from './src/Master';
import Layout from './src/Layout';

// Home
import Home from './src/Home';

// Using the Theme
import CyVerseTheme from './src/using-the-theme/CyVerseTheme';
import CyVerseThemeColors from './src/using-the-theme/CyVerseThemeColors';
import InstallingCyVerseTheme from './src/using-the-theme/InstallingCyVerseTheme';
import MuiThemeable from './src/using-the-theme/MuiThemeable';

// Components
import ActionGroupDoc from './src/components/ActionGroup';
import BarGraphDoc from './src/components/BarGraph';
import ButtonMenuDoc from './src/components/ButtonMenu';
import CheckableAvatarDoc from './src/components/CheckableAvatar';
import ElementDoc from './src/components/Element';
import FABDoc from './src/components/FAB';
import IdentityDoc from './src/components/Identity';
import InfoBlocDoc from './src/components/InfoBlock';
import ListCardDoc from './src/components/ListCard';
import ListCardActionsDoc from './src/components/ListCardActions';
import ListCardDetailDoc from './src/components/ListCardDetail';
import ListCardHeaderDoc from './src/components/ListCardHeader';
import ListCardIdentityDoc from './src/components/ListCardIdentity';
import ListCardSummaryDoc from './src/components/ListCardSummary';
import MediaCardDoc from './src/components/MediaCard';
import MediaCardGroupDoc from './src/components/MediaCardGroup';
import MeterGaugeDoc from './src/components/MeterGauge';
import PillDoc from './src/components/Pill';
import ProgressAvatarDoc from './src/components/ProgressAvatar';
import SearchBarDoc from './src/components/SearchBar';
import ShowMoreEllipsisDoc from './src/components/ShowMoreEllipsis';
import SkeletonListDoc from './src/components/SkeletonList';
import SubHeaderDoc from './src/components/SubHeader';
import SummaryTextDoc from './src/components/SummaryText';
import TooltipDoc from './src/components/Tooltip';
import VerticalMenuDoc from './src/components/VerticalMenu';

// SVG Icons
import SvgIcons from './src/SvgIcons/IconSection';

export default (
    <Route path="/" component={Master}>
        <IndexRoute component={Home} />
        <Route path="using-the-theme" component={Layout}>
            <Route path="cyverse-theme" component={CyVerseTheme} />
            <Route path="cyverse-theme-colors" component={CyVerseThemeColors} />
            <Route path="installing-the-cyverse-theme" component={InstallingCyVerseTheme} />
            <Route path="mui-themeable" component={MuiThemeable} />
        </Route>
        <Route path="components" component={Layout}>
            <Route path="action-group" component={ActionGroupDoc} />
            <Route path="bar-graph" component={BarGraphDoc} />
            <Route path="button-menu" component={ButtonMenuDoc} />
            <Route path="checkable-avatar" component={CheckableAvatarDoc} />
            <Route path="element" component={ElementDoc} />
            <Route path="floating-action-button" component={FABDoc} />
            <Route path="identity" component={IdentityDoc} />
            <Route path="info-block" component={InfoBlocDoc} />
            <Route path="list-card" component={ListCardDoc} />
            <Route path="list-card-actions" component={ListCardActionsDoc} />
            <Route path="list-card-detail" component={ListCardDetailDoc} />
            <Route path="list-card-header" component={ListCardHeaderDoc} />
            <Route path="list-card-identity" component={ListCardIdentityDoc} />
            <Route path="list-card-summary" component={ListCardSummaryDoc} />
            <Route path="media-card" component={MediaCardDoc} />
            <Route path="media-card-group" component={MediaCardGroupDoc} />
            <Route path="meter-guage" component={MeterGaugeDoc} />
            <Route path="pill" component={PillDoc} />
            <Route path="progress-avatar" component={ProgressAvatarDoc} />
            <Route path="search-bar" component={SearchBarDoc} />
            <Route path="show-more-ellipsis" component={ShowMoreEllipsisDoc} />
            <Route path="skeleton-list" component={SkeletonListDoc} />
            <Route path="subheader" component={SubHeaderDoc} />
            <Route path="summary-text" component={SummaryTextDoc} />
            <Route path="tooltip" component={TooltipDoc} />
            <Route path="vertical-menu" component={VerticalMenuDoc} />
        </Route>
        <Route path="svg-icons" component={SvgIcons} />
    </Route>
);
