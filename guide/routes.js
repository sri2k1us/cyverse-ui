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
import ActionGroupDoc from './src/componentDocs/ActionGroup/ActionGroupDoc';
import BarGraphDoc from './src/componentDocs/BarGraph/BarGraphDoc';
import ButtonMenuDoc from './src/componentDocs/ButtonMenu/ButtonMenuDoc';
import CheckableAvatarDoc from './src/componentDocs/CheckableAvatar/CheckableAvatarDoc';
import ElementDoc from './src/componentDocs/Element/ElementDoc';
import FABDoc from './src/componentDocs/FAB/FABDoc.js';
import IdentityDoc from './src/componentDocs/Identity/IdentityDoc';
import InfoBlocDoc from './src/componentDocs/InfoBlock/InfoBlockDoc';
import ListCardDoc from './src/componentDocs/ListCard/ListCardDoc';
import ListCardActionsDoc from './src/componentDocs/ListCardActions/ListCardActionsDoc';
import ListCardDetailDoc from './src/componentDocs/ListCardDetail/ListCardDetailDoc';
import ListCardHeaderDoc from './src/componentDocs/ListCardHeader/ListCardHeaderDoc';
import ListCardIdentityDoc from './src/componentDocs/ListCardIdentity/ListCardIdentityDoc';
import ListCardSummaryDoc from './src/componentDocs/ListCardSummary/ListCardSummaryDoc';
import MediaCardDoc from './src/componentDocs/MediaCard/MediaCardDoc';
import MediaCardGroupDoc from './src/componentDocs/MediaCardGroup/MediaCardGroupDoc';
import MeterGaugeDoc from './src/componentDocs/MeterGauge/MeterGaugeDoc';
import PillDoc from './src/componentDocs/Pill/PillDoc';
import ProgressAvatarDoc from './src/componentDocs/ProgressAvatar/ProgressAvatarDoc';
import SearchBarDoc from './src/componentDocs/SearchBar/SearchBarDoc';
import ShowMoreEllipsisDoc from './src/componentDocs/ShowMoreEllipsis/ShowMoreEllipsisDoc';
import SkeletonListDoc from './src/componentDocs/SkeletonList/SkeletonListDoc';
import SubHeaderDoc from './src/componentDocs/SubHeader/SubHeaderDoc';
import SummaryTextDoc from './src/componentDocs/SummaryText/SummaryTextDoc';
import TooltipDoc from './src/componentDocs/Tooltip/TooltipDoc';
import VerticalMenuDoc from './src/componentDocs/VerticalMenu/VerticalMenuDoc';

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
    </Route>
);
