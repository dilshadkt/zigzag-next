import Link from "next/link";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const EditTool = ({
  dublicate,
  indexOfDublicateItem,
  visbility,
  edit,
}: {
  dublicate?: any;
  indexOfDublicateItem?: number;
  visbility: string;
  edit: string;
}) => {
  return (
    <div className="flex justify-center w-full">
      <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
        <li>
          <div
            onClick={() => dublicate(indexOfDublicateItem)}
            className="tooltip"
            data-tip="Dublicate"
          >
            <ContentCopyIcon className="opacity-60 hover:opacity-90" />
          </div>
        </li>
        <li>
          <Link
            href={`/${visbility}`}
            target="_blank"
            className="tooltip"
            data-tip="Preview"
          >
            <VisibilityIcon className="opacity-60 hover:opacity-90" />
          </Link>
        </li>
        <li>
          <Link href={`/admin/seo/${edit}`} className="tooltip" data-tip="Edit">
            <EditIcon className="opacity-60 hover:opacity-90" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EditTool;
