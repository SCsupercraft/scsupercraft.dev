import { Layout } from '@/App';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from '@/components/ui/avatar';
import { TypographyH2, TypographyP } from '@/components/ui/text';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

type AuthorInfo = {
  name: string;
  role: string;
  icon?: string;
  link?: string;
};

type ProjectInfo = {
  name: string;
  description: string;
  content: string;
  tags?: string[];
  team?: AuthorInfo[];
  download?: string;
  viewMore?: string;
  image?: string;
};

const Projects: ProjectInfo[] = [
  {
    name: 'Create: Factory Builder',
    description: 'A unique map-based modpack. Currently in early development.',
    content:
      'Create: Factory Builder, or CFB for short, is my first Minecraft project and modpack. ' +
      "It's based around a custom map, where there are properties that can be bought, and then built in. " +
      'By completing quests and research, you unlock new items, machines, recipes, and more. ' +
      "At this point in time, I am no longer working on CFB until I've finished some updates for Jack's Economy.",
    tags: ['Minecraft Modpack'],
    team: [
      {
        name: 'SCsupercraft',
        role: 'Project Owner, Modpack & Mod Developer, Modpack Tester',
        icon: '/logo.png',
      },
      {
        name: 'The Brocker Rocker',
        role: 'Project Co-Owner, Modpack Developer',
        icon: 'https://cdn.discordapp.com/avatars/772385331340509184/8b78efeb25164ead51df3cc9b24c764e.png',
        link: 'https://www.curseforge.com/members/the_brocker_rocker/projects',
      },
      {
        name: 'CaptLuckyBang',
        role: 'Modpack Developer',
        icon: 'https://cdn.discordapp.com/avatars/367848096463323137/a_6c1c7626ff68e37559e0bd13e7669026.png',
        link: 'https://www.curseforge.com/members/captluckybang/projects',
      },
    ],
    download:
      'https://www.curseforge.com/minecraft/modpacks/create-factory-builder',
    image:
      'https://media.forgecdn.net/attachments/806/665/screenshot-2024-02-12-103234.png',
  },
  {
    name: "Jack's Economy (Forked)",
    description:
      'An economy mod for modpack developers and server owners alike.',
    content:
      "Jack's Economy was originally an economy mod made by Flapjack and Khajiitos. " +
      "However, they didn't have time to work on the mod due to real life circumstances. " +
      'Because of this, I made my own fork to continue the project, adding new features and fixing bugs.',
    tags: ['Minecraft Mod'],
    team: [
      {
        name: 'SCsupercraft',
        role: 'Author',
        icon: '/logo.png',
      },
      {
        name: 'Flapjack',
        role: 'Original Author',
        icon: 'https://scsupercraft.github.io/jacks-economy/img/authors/flapjack.jpg',
        link: 'https://www.curseforge.com/members/flapjacksmods',
      },
      {
        name: 'Khajiitos',
        role: 'Original Author',
        link: 'https://www.curseforge.com/members/khajiitos',
      },
    ],
    download:
      'https://www.curseforge.com/minecraft/mc-mods/flapjacks-economy-forked',
    viewMore: 'https://scsupercraft.github.io/jacks-economy/',
    image:
      'https://scsupercraft.github.io/jacks-economy/img/featured/admin_shop.png',
  },
];

function App() {
  return (
    <Layout>
      <div className="h-full">
        <TypographyH2 className="ml-2 mr-2">About Me</TypographyH2>
        <TypographyP className="lg:max-w-[70%]">
          Hello, I'm SC, a programmer who fell in love with Minecraft from a
          young age! Currently, I spend most of my free time working on my
          Minecraft projects. My favorite project is called Create: Factory
          Builder, or CFB for short. It's a Minecraft modpack with a unique
          concept and design, where you build factories in a map-based world,
          completing quests and research to unlock new items.
        </TypographyP>
        <TypographyH2>My Projects</TypographyH2>
        <TypographyP>
          I work on a variety of projects from time to time, which you can see
          below!
        </TypographyP>
        <ProjectList />
      </div>
    </Layout>
  );
}

function ProjectList() {
  return (
    <div className="flex flex-col justify-center mt-4 pb-4 gap-4">
      {Projects.map((project) => {
        return (
          <ProjectCard
            key={project.name}
            {...project}
          />
        );
      })}
    </div>
  );
}

function ProjectCard(props: ProjectInfo) {
  return (
    <div className="flex gap-4">
      <ProjectDetailsCard {...props} />
      {props.image && <ProjectImageCard image={props.image} />}
    </div>
  );
}

function ProjectDetailsCard({
  name,
  description,
  content,
  tags,
  team,
  download,
  viewMore,
}: ProjectInfo) {
  return (
    <Card className="flex-1/2">
      <CardHeader>
        <CardTitle className="flex align-center gap-1">
          <p className="mr-auto">{name}</p>
          {tags && tags.map((tag) => <Badge variant="default">{tag}</Badge>)}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex-col gap-4 mt-auto">
        <ProjectAuthors authors={team} />
        <div className="flex w-full gap-2">
          {download && (
            <ProjectButton
              link={download}
              text="Download"
            />
          )}
          {viewMore && (
            <ProjectButton
              link={viewMore}
              text="View More"
            />
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

function ProjectImageCard({ image }: { image: string }) {
  return (
    <Card className="hidden lg:flex flex-1/2 max-w-[40rem]">
      <CardContent>
        <AspectRatio
          ratio={16 / 9}
          className=" overflow-clip"
        >
          <img
            src={image}
            alt="Project Banner Image"
            className="w-full h-full rounded-lg object-cover"
          />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}

function ProjectAuthors({ authors }: { authors?: AuthorInfo[] }) {
  return authors ? (
    <AvatarGroup>
      {authors.map((author) => (
        <HoverCard key={author.name}>
          <HoverCardTrigger>
            <a
              href={author.link}
              target="_blank"
            >
              <Avatar>
                <AvatarImage
                  src={author.icon}
                  alt={author.name}
                />
                <AvatarFallback>{author.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="flex w-fit flex-col gap-0.5">
            <div>{author.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              {author.role}
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </AvatarGroup>
  ) : (
    <></>
  );
}

function ProjectButton({ link, text }: { link: string; text: string }) {
  return (
    <a
      className="flex-1/2"
      href={link}
      target="_blank"
    >
      <Button
        className="w-full"
        variant="outline"
      >
        {text}
      </Button>
    </a>
  );
}

export default App;
