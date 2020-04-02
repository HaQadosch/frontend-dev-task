import React from "react";
import ErrorBoundary, { FallbackProps } from 'react-error-boundary'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

interface IBroomCardProps {
  item: any
}

const BroomCard: React.FC<IBroomCardProps> = ({ item }) => {

  return (
    <Card
      style={ {
        width: 300,
        backgroundColor: `${ item.color || '#000000' }87`
      } }
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
        avatar={
          <a href={ item.user.links.html } >
            <Avatar src={ item.user.profile_image.small } alt={ item.user.name } />
          </a>
        }
        title={ <a href={ item.links.html } style={ { color: 'black' } }>{ item.description || 'no title' }</a> }
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

export const SafeBroomCard: React.FC<IBroomCardProps> = ({ item }) => {
  return <ErrorBoundary FallbackComponent={ BroomFallbackCard }>
    <BroomCard item={ item } />
  </ErrorBoundary>
}