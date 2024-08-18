import { Badge, Button, Card, Group, Image, Indicator, Text, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";

const ProjectCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const badge = useMatches({
        xsm: "sm", md: "md", lg: "lg"
    });
    const btn = useMatches({
        xs: "xs", sm: "sm", md: "md"
    });

    return (
        <div
            className="w-full sm:w-[48%] md:w-[48%] lg:w-[32%] p-2"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <Card
                onClick={open}
                className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"
                shadow="lg"
                padding="sm"
                radius="lg"
                withBorder
            >
                <Card.Section className="p-3">
                    <Image
                        className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
                        src={props.image}
                        alt={props.image}
                    />
                </Card.Section>

                <Group spacing="apart" mt="xs" mb="xs">
                    <div className="text-xl sm:text-2xl gap-2 font-bold text-white flex items-center">
                        {props.title}
                        {props.live === true && (
                            <Badge
                                className="!px-1"
                                variant="outline"
                                color="red"
                                rightSection={
                                    <Indicator
                                        className="!mr-0.5 !z-0"
                                        color="red"
                                        position="middle-end"
                                        size={7}
                                        processing
                                    />
                                }
                            >
                                Live
                            </Badge>
                        )}
                    </div>
                </Group>

                <Group mb="sm" className="gap-2">
                    {props.technologies.map((tech: string, index: number) => 
                        index < 3 && (
                            <Badge key={index} size={badge} variant="light" color="#64FFDA">
                                {tech}
                            </Badge>
                        )
                    )}
                </Group>

                <Text
                    className="text-justify text-xs sm:text-sm"
                    lineClamp={5}
                    size="sm"
                    c="dimmed"
                >
                    {props.desc}
                </Text>

                <Button
                    onClick={open}
                    className="mt-3 w-full"
                    color="#64FFDA"
                    variant="outline"
                    radius="md"
                    size={btn}
                >
                    Show More
                </Button>
            </Card>

            <FullProjectModal
                opened={opened}
                close={close}
                title={props.title}
                desc={props.desc}
                image={props.image}
                live={props.live}
                link={props.link}
                github={props.github}
                technologies={props.technologies}
            />
        </div>
    );
};

export default ProjectCard;
