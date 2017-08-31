import * as React from "react";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import Page, { SideLink, SideItem } from "components/shared/common/Page";
import Headline from "components/shared/kit/Headline";

export default ({ match, children }) =>
  <Page
    sidebar={
      <SideItem>
        <Headline>Menu</Headline>
        <SideLink to={replaceParams(paths.PROJECT_TICKETS, match.params)}>
          Tickets
        </SideLink>
      </SideItem>
    }
  >
    {children}
  </Page>;
