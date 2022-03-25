import React from 'react';
import { Container } from './styles';

import { BiPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Enterprise } from '../../pages';

interface CardProps {
  enterprise: Enterprise;
  editEnterprise: (enterprise?: Enterprise) => void;
  deleteEnterprise: () => void;
}

export default function Card({
  enterprise,
  editEnterprise,
  deleteEnterprise,
}: CardProps) {
  return (
    <Container>
      <div className="content">
        <div className="title">
          <h3>{enterprise.name}</h3>

          <div className="actions">
            <BiPencil size={25} onClick={(e) => editEnterprise(enterprise)} />
            <AiOutlineDelete size={25} onClick={deleteEnterprise} />
          </div>
        </div>
        <p>{enterprise.address_label}</p>
      </div>
      <div className="tags">
        <div className="tag">
          <span>{enterprise.status}</span>
        </div>
        <div className="tag">
          <span>{enterprise.purpose}</span>
        </div>
      </div>
    </Container>
  );
}
