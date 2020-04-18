/// <reference path='./Resume.d.ts' />
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import pdfResume from '../assets/files/yf-cv.pdf';

export default function Resume() {
  const { t, i18n } = useTranslation();
  return (
    <div id="resume">
      <div className="section-title text-center center">
        <h2>{t("business-card-resume-title")}</h2>
        <hr />
      </div>
      <div className="d-flex justify-content-center">
        <a className="btn btn-primary btn-lg mr-1" href={pdfResume} target="_blank">
          <i className="fas fa-file-pdf"></i>
        </a>
        <a className="btn btn-primary btn-lg" href="https://drive.google.com/open?id=1RPKIdkOwcD_A4P0ZWQGrlFt5-abcN6-3CBJ7WvM8mc8" target="_blank">
          <i className="fas fa-file-word"></i>
        </a>
      </div>
    </div>
  );
}