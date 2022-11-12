import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  render() {
    return (
      <>
        <h2>SearchForm</h2>
        <SearchFormStyled onSubmit={this.props.handleSubmit}>
          <FormBtn type="submit">
            <FiSearch size="16px" />
          </FormBtn>
          <InputSearch
            placeholder="What do you want to write?"
            name="search"
            required
            autoFocus
          />
        </SearchFormStyled>
      </>
    );
  }
}
