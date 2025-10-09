import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { UserDto } from "@/features/mention/user.dto";
import type { ColumnDef } from "@tanstack/react-table";
import { TrancheBadge } from "./TrancheBadge";
import { DeleteButton } from "./deleteButton";
import { MdPerson } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { classes, mentions } from "@/core/types";

export const columns: ColumnDef<UserDto>[] = [
  {
    accessorKey: "imageUrl",
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Photo</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <Avatar className=" size-11 ">
        <AvatarFallback className="dark:text-white  dark:bg-zinc-600">
          {row.getValue("imageUrl") ? (
            <img src={row.getValue("imageUrl")} />
          ) : (
            <MdPerson size={30} />
          )}
        </AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "identifier",
    header: () => {
      return (
        <div className="hidden w-full items-center justify-between md:flex">
          <p className="font-semibold dark:text-white">Matricule</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" hidden py-2 dark:text-white md:flex">
        {row.getValue("identifier")}
      </p>
    ),
  },
  {
    accessorKey: "contact",
    header: () => {
      return (
        <div className="hidden w-full items-center justify-between md:flex">
          <p className="font-semibold dark:text-white">Contact</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" hidden py-2 dark:text-white md:flex">
        {row.getValue("contact")}
      </p>
    ),
  },
  {
    accessorKey: "name",
    enableSorting: true,
    enableColumnFilter: true,
    header: () => {
      return (
        <div className="flex w-full items-center justify-between cursor-pointer">
          <p className="font-semibold dark:text-white">Nom</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white font-semibold">
        {row.getValue("name")}
      </p>
    ),
  },
  {
    accessorKey: "lastName",
    enableColumnFilter: true,

    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Prenom</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white">{row.getValue("lastName")}</p>
    ),
  },
  {
    accessorKey: "mention",
    enableColumnFilter: true,
    header: ({ column }) => {
      return (
        <div className="flex w-full items-center gap-5 justify-between m-1">
          <Select
            value={
              (column.getFilterValue() as string)?.replace(/ /g, "_") ?? ""
            }
            onValueChange={(value) =>
              column.setFilterValue(
                value === "Tout" ? undefined : value.replace(/_/g, " ")
              )
            }
          >
            <SelectTrigger className="w-full bg-gray-200 ">
              <SelectValue placeholder="Mention" />
            </SelectTrigger>
            <SelectContent className="z-[900]">
              <SelectItem value="Tout">Tout</SelectItem>
              {Object.keys(mentions).map((mainBranche) => (
                <SelectItem key={mainBranche} value={mainBranche}>
                  {mainBranche.replace(/_/g, "   ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className="py-2 dark:text-white">{row.getValue("mention")}</p>
    ),
  },
  {
    accessorKey: "level",
    enableSorting: true,
    header: ({ column }) => {
      return (
        <div className="flex w-full items-center justify-between gap-5 cursor-pointer">
          <Select
            value={column.getFilterValue() as string}
            onValueChange={(value) =>
              column.setFilterValue(value === "Tout" ? undefined : value)
            }
          >
            <SelectTrigger className="w-full bg-gray-200">
              <SelectValue placeholder="Niveau" />
            </SelectTrigger>
            <SelectContent className="z-[900]">
              <SelectItem value="Tout">Tout</SelectItem>
              {classes.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white">{row.getValue("level")}</p>
    ),
  },
  {
    accessorKey: "branche",
    header: ({ column, table }) => {
      const mention = table.getColumn("mention")?.getFilterValue() as
        | string
        | undefined;
      return (
        <div className="flex w-full items-center justify-between gap-5">
          <Select
            disabled={!mention}
            value={column.getFilterValue() as string}
            onValueChange={(value) =>
              column.setFilterValue(value === "Tout" ? undefined : value)
            }
          >
            <SelectTrigger className="w-full bg-gray-200">
              <SelectValue placeholder="Branche" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tout">Tout</SelectItem>
              {mention &&
                mentions[mention.replace(/ /g, "_")].map((branche) => (
                  <SelectItem key={branche} value={branche}>
                    {branche}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white">{row.getValue("branche")}</p>
    ),
  },
  {
    accessorKey: "Premier",
    header: () => {
      return (
        <div className=" flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">1er Tranche</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <TrancheBadge
        studentData={row.original}
        tranche={"Premier"}
        trancheId={row.original.trancheId}
      />
    ),
  },

  {
    accessorKey: "Deuxieme",
    header: () => {
      return (
        <div className=" flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">2ème Tranche</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <TrancheBadge
        studentData={row.original}
        tranche={"Deuxieme"}
        trancheId={row.original.trancheId}
      />
    ),
  },
  {
    accessorKey: "Troisieme",
    header: () => {
      return (
        <div className=" flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">3ème Tranche</p>
        </div>
      );
    },
    cell: ({ row }) => (
      <TrancheBadge
        studentData={row.original}
        tranche={"Troisieme"}
        trancheId={row.original.trancheId}
      />
    ),
  },
  {
    accessorKey: "mentionId",
    header: () => {},
    enableHiding: false,
    cell: ({ row }) => {
      return <DeleteButton id={row.getValue("mentionId")} />;
    },
  },
];
