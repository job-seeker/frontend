'use strict';

import superagent from 'superagent';

export const companyFetch = companies => ({
  type: 'COMPANY_FETCH',
  payload: companies,
});

export const companyCreate = company => ({
  type: 'COMPANY_CREATE',
  payload: company,
});

export const companyUpdate = company => ({
  type: 'COMPANY_UPDATE',
  payload: company,
});

export const companyDelete = company => ({
  type: 'COMPANY_DELETE',
  payload: company,
});

export const singleCompanyFetchRequest = (profile, company) => (dispatch, getState) => {
  let { token } = getState();
  return superagent.get(`${__API_URL__}/api/profile/${profile._id}/company/${company}`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(companyFetch(res.body));
      return res;
    });
};

export const companyFetchRequest = () => (dispatch, getState) => {
  let { token } = getState();
  return superagent.get(`${__API_URL__}/api/profile/${profile._id}/company`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(companyFetch(res.body));
      return res;
    });
};

export const companyUpdateRequest = (profile, company) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.put(`${__API_URL__}/api/profile/${profile._id}/company/${company.companyId}`)
    .set('Authorization', `Bearer ${token}`)
    .send(company)
    .then(res => {
      dispatch(companyUpdate(res.body));
      return res;
    });
};

export const companyCreateRequest = (profile, company) => (dispatch, getState) => {
  let { token } = getState();
  return superagent.post(`${__API_URL__}/api/profile/${profile._id}/company`)
    .set('Authorization', `Bearer ${token}`)
    .send(company)
    .then(res => {
      dispatch(companyCreate(res.body));
      return res;
    });
};

export const companyDeleteRequest = (company) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.delete(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(companyDelete(company));
      return res;
    });
};
