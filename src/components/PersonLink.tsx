import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../types';

interface Props {
  person: Person;
}

export const PersonLink: FC<Props> = (props) => {
  const { person: { name, slug, sex } } = props;

  return (
    <Link
      to={`/people/${slug}`}
      className={classNames({ 'has-text-danger': sex === 'f' })}
    >
      {name}
    </Link>
  );
};
