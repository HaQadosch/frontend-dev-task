import React from "react";
import ErrorBoundary, { FallbackProps } from 'react-error-boundary'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

interface IBroomCardProps {
  item: any
}

const BroomCardBare: React.FC<IBroomCardProps> = ({ item }) => {

  return (
    <Card
      style={ { width: 300 } }
      cover={
        <img
          alt={ item.alt_description }
          src={ item.urls.small }
        />
      }
      actions={ [
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ] }
    >
      <Meta
        avatar={ <Avatar src={ item.user.profile_image.small } alt={ item.user.name } /> }
        title={ item.description }
        description={ item.alt_description }
      />
    </Card>
  )
}

const BroomFallbackCard: React.FC<FallbackProps> = ({ componentStack, error }) => (
  <div>
    <p><strong>Oops! An error occured!</strong></p>
    <p>Here’s what we know…</p>
    <p><strong>Error:</strong> { error?.toString() ?? '' }</p>
    <p><strong>Stacktrace:</strong> { componentStack }</p>
  </div>
);

export const BroomCard: React.FC<IBroomCardProps> = ({ item }) => {
  return <ErrorBoundary FallbackComponent={ BroomFallbackCard }>
    <BroomCardBare item={ item } />
  </ErrorBoundary>
}