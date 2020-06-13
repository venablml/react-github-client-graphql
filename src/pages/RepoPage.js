import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '../components/shared/Tabs';
import RepoContainer from '../components/RepoContainer';

const languages = process.env.REACT_APP_LANGUAGES.split(',');

const addRouteToLanguages = (languages) => {
  return languages.map((language) =>
    Object.assign({}, { language }, { to: `/repos?language=${language}` })
  );
};
const RepoPage = () => {
  const location = useLocation();
  const [currentLanguage, selectLanguage] = useState(location || languages[0]);
  useEffect(() => {
    const language =
      new URLSearchParams(location.search).get('language') || languages[0];
    selectLanguage(language);
  }, [location]);

  return (
    <>
      <Tabs
        items={addRouteToLanguages(languages)}
        selected={currentLanguage}
      ></Tabs>
      <RepoContainer language={currentLanguage} />
    </>
  );
};

export default RepoPage;
