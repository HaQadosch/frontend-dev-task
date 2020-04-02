import React, { useState } from "react"
import './BroomCard.css'

import ErrorBoundary, { FallbackProps } from 'react-error-boundary'

import { EditOutlined, InfoCircleOutlined, InfoCircleTwoTone, MessageTwoTone, MessageOutlined, DownOutlined } from '@ant-design/icons'
import { Card, Avatar, Dropdown, Button, Menu } from 'antd'
import { ClickParam } from "antd/lib/menu"
import { AppDispatch } from "../store/store"
import { useDispatch } from "react-redux"
const { Meta } = Card

const referals = '?utm_source=instagroom&utm_medium=referral'

interface IBroomCardProps {
  item: any
}

const DescriptionInfo: React.FC<IBroomCardProps> = ({ item }) => (
  <>
    <p className='card__meta card__despcription'>
      Photo by <a href={ `${ item.user.links.html }/${ referals }` }>{ item.user.name }</a>
      on <a href={ `https://unsplash.com/${ referals }` }>Unsplash</a>
    </p>
    { item.alt_description }
  </>
)

const DescriptionTags: React.FC<IBroomCardProps> = ({ item }) => (
  <>
    <p className='card__meta card__despcription'>
      Tags
    </p>
    { item.tags.map(({ title }: { title: string }) => <p key={ title }>{ title }</p>) }
  </>
)

const DropdownTags: React.FC<IBroomCardProps> = ({ item }) => {
  const dispatch: AppDispatch = useDispatch()

  const menu = (
    <Menu onClick={ handleMenuClick }>
      {
        item.tags.map(({ title }: { title: string }) => <Menu.Item key={ title }>{ title }</Menu.Item>)
      }
    </Menu>
  );

  return (
    <Dropdown overlay={ menu }>
      <Button type='ghost'>
        <EditOutlined /><DownOutlined />
      </Button>
    </Dropdown>
  )

  function handleMenuClick ({ key }: ClickParam) {
    dispatch({ type: 'saga/fetchPublicPhotosFeed', payload: key })
  }
}

const BroomCard: React.FC<IBroomCardProps> = ({ item }) => {
  const [selectedTab, setSelectedTab] = useState<'info' | 'tags'>(() => 'info')

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
        <Button onClick={ () => { setSelectedTab('info') } } type='ghost'>
          {
            selectedTab === 'info'
              ? <InfoCircleTwoTone key="info" />
              : <InfoCircleOutlined key="info" />
          }
        </Button>,
        <Button onClick={ () => { setSelectedTab('tags') } } type='ghost'>
          {
            selectedTab === 'tags'
              ? <MessageTwoTone key="tags" />
              : <MessageOutlined key="tags" />
          }
        </Button>,
        <DropdownTags item={ item } />
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
          selectedTab === 'info'
            ? <DescriptionInfo item={ item } />
            : selectedTab === 'tags'
              ? <DescriptionTags item={ item } />
              : <DropdownTags item={ item } />
        }
      />
    </Card >
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