-- CreateTable
CREATE TABLE "Diploma" (
    "DiplomaID" SERIAL NOT NULL,
    "naam" TEXT NOT NULL,
    "afstudeerJaar" INTEGER NOT NULL,

    CONSTRAINT "Diploma_pkey" PRIMARY KEY ("DiplomaID")
);

-- CreateTable
CREATE TABLE "Gebruiker" (
    "gebruikerID" SERIAL NOT NULL,
    "naam" TEXT NOT NULL,
    "straat" TEXT NOT NULL,
    "nummer" INTEGER NOT NULL,
    "postcode" INTEGER NOT NULL,
    "stad" TEXT NOT NULL,

    CONSTRAINT "Gebruiker_pkey" PRIMARY KEY ("gebruikerID")
);

-- CreateTable
CREATE TABLE "Job" (
    "jobID" SERIAL NOT NULL,
    "naam" TEXT NOT NULL,
    "bedrijf" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("jobID")
);

-- CreateTable
CREATE TABLE "Vaardigheden" (
    "vaardighedenID" SERIAL NOT NULL,
    "naam" TEXT NOT NULL,
    "jaarErvaring" INTEGER NOT NULL,

    CONSTRAINT "Vaardigheden_pkey" PRIMARY KEY ("vaardighedenID")
);

-- CreateTable
CREATE TABLE "diploma_job" (
    "diplomaID" INTEGER NOT NULL,
    "jobID" INTEGER NOT NULL,

    CONSTRAINT "diploma_job_PK" PRIMARY KEY ("diplomaID","jobID")
);

-- CreateTable
CREATE TABLE "gebruiker_job" (
    "gebruikerID" INTEGER NOT NULL,
    "jobID" INTEGER NOT NULL,

    CONSTRAINT "gebruiker_job_pkey" PRIMARY KEY ("gebruikerID","jobID")
);

-- CreateTable
CREATE TABLE "vaardigheden_job" (
    "vaardighedenID" INTEGER NOT NULL,
    "jobID" INTEGER NOT NULL,

    CONSTRAINT "vaardigheden_job_pkey" PRIMARY KEY ("vaardighedenID","jobID")
);

-- AddForeignKey
ALTER TABLE "diploma_job" ADD CONSTRAINT "diploma_job_diplomaID_fkey" FOREIGN KEY ("diplomaID") REFERENCES "Diploma"("DiplomaID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diploma_job" ADD CONSTRAINT "diploma_job_jobID_fkey" FOREIGN KEY ("jobID") REFERENCES "Job"("jobID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "gebruiker_job" ADD CONSTRAINT "gebruiker_job_gebruikerID_fkey" FOREIGN KEY ("gebruikerID") REFERENCES "Gebruiker"("gebruikerID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "gebruiker_job" ADD CONSTRAINT "gebruiker_job_jobID_fkey" FOREIGN KEY ("jobID") REFERENCES "Job"("jobID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vaardigheden_job" ADD CONSTRAINT "vaardigheden_job_jobID_fkey" FOREIGN KEY ("jobID") REFERENCES "Job"("jobID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vaardigheden_job" ADD CONSTRAINT "vaardigheden_job_vaardighedenID_fkey" FOREIGN KEY ("vaardighedenID") REFERENCES "Vaardigheden"("vaardighedenID") ON DELETE NO ACTION ON UPDATE NO ACTION;

