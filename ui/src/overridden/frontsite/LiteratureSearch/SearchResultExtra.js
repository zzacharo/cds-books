import React from "react";
import { Message, List } from "semantic-ui-react";
import { FrontSiteRoutes } from "@inveniosoftware/react-invenio-app-ils";
import { Link } from "react-router-dom";
import Qs from "qs";

export const SearchResultExtra = () => {
  const onClickBookRequestLink = () => {
    const params = Qs.parse(window.location.search);
    const queryString = params["?q"];
    return {
      pathname: FrontSiteRoutes.documentRequestForm,
      state: { queryString },
    };
  };

  const snvLink = (
    <Link
      href="https://sis.web.cern.ch/search-and-read/online-resources/snv-connect"
      taget="_blank"
    >
      SNV-Connect
    </Link>
  );
  const requestFormLink = (
    <Link className="primary" to={onClickBookRequestLink()}>
      request form
    </Link>
  );
  return (
    <Message.Content>
      <Message.Header>
        Couldn't find the literature you were looking for?
      </Message.Header>
      <List className="mt-5">
        <List.Item>For standards, please directly search on {snvLink}.</List.Item>
        <List.Item>
          Please fill in {requestFormLink} to request new additions or purchases to the
          catalogue. (Login required)
        </List.Item>
      </List>
    </Message.Content>
  );
};
