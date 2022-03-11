import List from 'src/components/Tag/List/List'
import { CardProps } from 'web/src/components/Card/Card'

export interface StandardProps extends CardProps {
  link: string
}

const Standard: React.FC<StandardProps> = ({
  title,
  media,
  description,
  tags,
  link,
  onTagClick,
  excludeTag,
}) => (
  <article className="card standard flex flex-col mt-4">
    <header>
      <h1
        className={
          'w-full p-2 text-lg font-extrabold text-center capitalize text-white'
        }
      >
        {title}
      </h1>
      {media && <img alt={'Example app'} {...media} />}
    </header>
    <div className="content">
      <p className={'text-white'}>{description}</p>
      {link && (
        <a href={link} target={'_blank'} rel="noreferrer">
          Source
        </a>
      )}
    </div>
    <footer className={'p-4'}>
      <List
        tags={tags}
        rootKey={title}
        onClick={onTagClick}
        excludeTag={excludeTag}
      />
    </footer>
  </article>
)

export default Standard
