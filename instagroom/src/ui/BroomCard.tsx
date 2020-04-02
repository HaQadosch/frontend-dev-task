import React from "react"
import './BroomCard.css'

import ErrorBoundary, { FallbackProps } from 'react-error-boundary'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Card, Avatar } from 'antd'
const { Meta } = Card

interface IBroomCardProps {
  item: any
}

const referals = '?utm_source=instagroom&utm_medium=referral'

const BroomCard: React.FC<IBroomCardProps> = ({ item }) => {

  return (
    <Card
      className='card'
      hoverable
      style={ {
        backgroundColor: `${ item.color || '#000000' }87`
      } }
      // extra={
      //   <Avatar src={ item.user.profile_image.small } alt={ item.user.name } />
      // }
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
          <a href={ `${ item.user.links.html }/${ referals }` } >
            <Avatar src={ item.user.profile_image.small } alt={ item.user.name } />
          </a>
        }
        title={ <a className='card__meta card__title' href={ `${ item.links.html }/${ referals }` } >{ item.description || 'no title' }</a> }
        description={
          <>
            <p className='card__meta card__despcription'>
              Photo by
              <a href={ `${ item.user.links.html }/${ referals }` }>{ item.user.name }</a>
              on
              <a href={ `https://unsplash.com/${ referals }` }>Unsplash</a>
            </p>
            { item.alt_description }
          </>
        }
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